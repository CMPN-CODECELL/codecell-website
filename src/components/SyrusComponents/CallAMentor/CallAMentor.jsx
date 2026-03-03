import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CallAMentor.module.css";

const STORAGE_KEY = "callAMentor_latestRequest";
const DESKTOP_DROPDOWN_TO_MODAL_RATIO = 140 / 900;

const getDropdownBreakpointConfig = (viewportWidth) => {
  if (viewportWidth <= 480) {
    return { minPx: 72, maxPx: 104, ratioMultiplier: 0.95 };
  }

  if (viewportWidth <= 768) {
    return { minPx: 84, maxPx: 118, ratioMultiplier: 1 };
  }

  if (viewportWidth <= 1024) {
    return { minPx: 92, maxPx: 132, ratioMultiplier: 1.02 };
  }

  return { minPx: 100, maxPx: 140, ratioMultiplier: 1 };
};

const getMentorLabel = (acceptedBy = {}) =>
  acceptedBy.name || acceptedBy.tag || acceptedBy.username || "";

const saveRequest = (req) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(req));
  } catch {}
};

const loadRequest = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const clearRequest = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
};

const CallAMentor = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    tableNumber: "",
    queryCategory: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [activeRequest, setActiveRequest] = useState(() => loadRequest());
  const [showForm, setShowForm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pollingRef = useRef(null);
  const modalRef = useRef(null);
  const screenRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const closeTimerRef = useRef(null);

  const normalizeUrl = (url) => url.replace(/\/$/, "");
  const rawBackend = import.meta.env.VITE_BACKEND_URL?.trim();
  const fallbackBackend = import.meta.env.DEV
    ? "http://localhost:4000"
    : window.location.origin;
  const backendBase = normalizeUrl(rawBackend || fallbackBackend);

  const apiBase = backendBase.endsWith("/api")
    ? backendBase
    : `${backendBase}/api`;

  const queryCategories = [
    "Technical Issue",
    "Idea Validation",
    "Project Guidance",
    "Resource Access",
    "Presentation Help",
    "Others",
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenUp, setDropdownOpenUp] = useState(false);
  const [dropdownMenuMaxHeight, setDropdownMenuMaxHeight] = useState(null);

  // Decide initial view: show form only if no saved request
  useEffect(() => {
    if (isOpen) {
      const saved = loadRequest();
      if (saved) {
        setActiveRequest(saved);
        setShowForm(false);
      } else {
        setShowForm(true);
      }
    }
  }, [isOpen]);

  // Poll for status updates when we have an active request
  const pollStatus = useCallback(() => {
    if (!activeRequest?.requestId) return;
    stopPolling();
    pollingRef.current = setInterval(async () => {
      try {
        const { data } = await axios.get(
          `${apiBase}/mentor-requests/${activeRequest.requestId}`,
        );
        const updated = { ...activeRequest, ...data };
        setActiveRequest(updated);
        saveRequest(updated);
        // Stop polling if terminal state
        if (["completed", "cancelled", "resolved"].includes(data.status)) {
          stopPolling();
        }
      } catch {
        // silently ignore poll errors
      }
    }, 2000);
  }, [activeRequest, apiBase]);

  useEffect(() => {
    if (isOpen && activeRequest?.requestId && !showForm) {
      pollStatus();
    }
    return () => stopPolling();
  }, [isOpen, activeRequest?.requestId, showForm, pollStatus]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      stopPolling();
      return;
    }

    // Block ALL scroll at capture phase (stops Lenis + native page scroll).
    // For elements inside the modal screen, we manually apply the scroll delta.
    let lastTouchY = 0;

    const manualScroll = (target, deltaY) => {
      // Walk up from target to find the nearest scrollable element inside screen
      let el = target;
      while (el && el !== screenRef.current && el !== document) {
        if (el.scrollHeight > el.clientHeight) {
          const max = el.scrollHeight - el.clientHeight;
          el.scrollTop = Math.max(0, Math.min(max, el.scrollTop + deltaY));
          return;
        }
        el = el.parentElement;
      }
      // Fallback: scroll the screen container itself
      if (screenRef.current) {
        const s = screenRef.current;
        const max = s.scrollHeight - s.clientHeight;
        s.scrollTop = Math.max(0, Math.min(max, s.scrollTop + deltaY));
      }
    };

    const stopWheel = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (screenRef.current && screenRef.current.contains(e.target)) {
        manualScroll(e.target, e.deltaY);
      }
    };

    const stopTouchStart = (e) => {
      if (e.touches.length === 1) lastTouchY = e.touches[0].clientY;
    };

    const stopTouch = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (
        screenRef.current &&
        screenRef.current.contains(e.target) &&
        e.touches.length === 1
      ) {
        const touchY = e.touches[0].clientY;
        const deltaY = lastTouchY - touchY;
        lastTouchY = touchY;
        manualScroll(e.target, deltaY);
      }
    };

    const stopKeys = (e) => {
      const keys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      if (keys.includes(e.key)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", stopWheel, {
      passive: false,
      capture: true,
    });
    window.addEventListener("touchstart", stopTouchStart, { capture: true });
    window.addEventListener("touchmove", stopTouch, {
      passive: false,
      capture: true,
    });
    window.addEventListener("keydown", stopKeys, { capture: true });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", stopWheel, { capture: true });
      window.removeEventListener("touchstart", stopTouchStart, {
        capture: true,
      });
      window.removeEventListener("touchmove", stopTouch, { capture: true });
      window.removeEventListener("keydown", stopKeys, { capture: true });
      stopPolling();
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [isOpen]);

  const positionDropdownMenu = useCallback(() => {
    if (!dropdownOpen || !screenRef.current || !dropdownButtonRef.current) return;

    const screenRect = screenRef.current.getBoundingClientRect();
    const modalRect = modalRef.current?.getBoundingClientRect();
    const buttonRect = dropdownButtonRef.current.getBoundingClientRect();
    const menuHeight = dropdownMenuRef.current?.scrollHeight || 140;
    const viewportWidth = window.innerWidth;
    const viewportHeight =
      window.visualViewport?.height || window.innerHeight;
    const modalHeight = modalRect?.height || screenRect.height || 0;
    const { minPx, maxPx, ratioMultiplier } =
      getDropdownBreakpointConfig(viewportWidth);
    const baseMaxHeight = Math.max(
      minPx,
      Math.min(
        maxPx,
        Math.round(
          modalHeight * DESKTOP_DROPDOWN_TO_MODAL_RATIO * ratioMultiplier,
        ),
      ),
    );
    const gap = 4;
    const edgePadding = 8;
    const menuChromeHeight = 10; // menu vertical padding + border

    const safeTop = Math.max(screenRect.top, edgePadding);
    const safeBottom = Math.min(screenRect.bottom, viewportHeight - edgePadding);
    const availableBelow = Math.max(
      0,
      Math.floor(safeBottom - buttonRect.bottom - gap),
    );
    const availableAbove = Math.max(
      0,
      Math.floor(buttonRect.top - safeTop - gap),
    );

    const preferredHeight = Math.min(menuHeight, baseMaxHeight);
    const shouldOpenUp =
      availableBelow < preferredHeight && availableAbove > availableBelow;

    const availableSpace = shouldOpenUp ? availableAbove : availableBelow;
    const fallbackSpace = shouldOpenUp ? availableBelow : availableAbove;
    const resolvedSpace =
      availableSpace > 0 ? availableSpace : fallbackSpace > 0 ? fallbackSpace : 0;
    const nextMaxHeight = Math.min(
      baseMaxHeight,
      Math.max(0, resolvedSpace - menuChromeHeight),
    );

    setDropdownOpenUp(shouldOpenUp);
    setDropdownMenuMaxHeight(nextMaxHeight);
  }, [dropdownOpen]);

  useEffect(() => {
    if (!dropdownOpen) {
      setDropdownOpenUp(false);
      setDropdownMenuMaxHeight(null);
      return;
    }

    let rafId = window.requestAnimationFrame(positionDropdownMenu);
    const handleReposition = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(positionDropdownMenu);
    };

    const screenEl = screenRef.current;
    const visualViewport = window.visualViewport;
    window.addEventListener("resize", handleReposition);
    visualViewport?.addEventListener("resize", handleReposition);
    screenEl?.addEventListener("scroll", handleReposition);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleReposition);
      visualViewport?.removeEventListener("resize", handleReposition);
      screenEl?.removeEventListener("scroll", handleReposition);
    };
  }, [dropdownOpen, positionDropdownMenu]);

  const stopPolling = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const closeModal = () => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setIsClosing(false);
      stopPolling();
      setDropdownOpen(false);
      setDropdownOpenUp(false);
      setDropdownMenuMaxHeight(null);
      setIsSubmitting(false);
      setSubmitError("");
      setErrors({});
      setShowForm(false);
      setFormData({
        teamName: "",
        tableNumber: "",
        queryCategory: "",
      });
      onClose();
    }, 380);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.teamName.trim()) newErrors.teamName = "Team Name is required";
    if (!formData.tableNumber.trim())
      newErrors.tableNumber = "Table Number is required";
    if (!formData.queryCategory)
      newErrors.queryCategory = "Query Category is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const { data } = await axios.post(`${apiBase}/mentor-requests`, formData);

      const newReq = {
        ...formData,
        requestId: data.requestId,
        status: data.status || "pending",
        createdAt: new Date().toISOString(),
      };

      setActiveRequest(newReq);
      saveRequest(newReq);
      setShowForm(false);
      setFormData({ teamName: "", tableNumber: "", queryCategory: "" });
    } catch (err) {
      setSubmitError(
        err.response?.data?.message ||
          "Unable to send request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusLabel = (s) => {
    const map = {
      pending: "Waiting for Mentor",
      accepted: "Mentor Accepted",
      completed: "Completed",
      resolved: "Resolved",
      cancelled: "Cancelled",
    };
    return map[s] || s || "Pending";
  };

  const statusColor = (s) => {
    const map = {
      pending: "#ffc641",
      accepted: "#2ecc71",
      completed: "#2ecc71",
      resolved: "#70a1ff",
      cancelled: "#ff6b6b",
    };
    return map[s] || "#ffc641";
  };

  const handleNewRequest = () => {
    setShowForm(true);
    setErrors({});
    setSubmitError("");
    setFormData({ teamName: "", tableNumber: "", queryCategory: "" });
  };

  if (!isOpen && !isClosing) return null;

  // Determine which view to show
  const showStatus = activeRequest && !showForm;

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div
        ref={modalRef}
        className={`${styles.modal} ${isClosing ? styles.modalClosing : ""}`}
      >
        <div className={styles.screen} ref={screenRef} onClick={(e) => e.stopPropagation()}>
          <div className={styles.screenContent}>
            <h2>Call A Mentor</h2>

            {showStatus ? (
              /* ── STATUS VIEW ── */
              <div className={styles.statusView}>
                <div className={styles.statusCard}>
                  <div
                    className={styles.statusBadge}
                    style={{
                      color: statusColor(activeRequest.status),
                      borderColor: statusColor(activeRequest.status),
                    }}
                  >
                    {statusLabel(activeRequest.status)}
                  </div>

                  <div className={styles.statusField}>
                    <span className={styles.statusLabel}>Team</span>
                    <span className={styles.statusValue}>
                      {activeRequest.teamName}
                    </span>
                  </div>

                  <div className={styles.statusField}>
                    <span className={styles.statusLabel}>Table</span>
                    <span className={styles.statusValue}>
                      {activeRequest.tableNumber}
                    </span>
                  </div>

                  <div className={styles.statusField}>
                    <span className={styles.statusLabel}>Category</span>
                    <span className={styles.statusValue}>
                      {activeRequest.queryCategory}
                    </span>
                  </div>

                  {activeRequest.acceptedBy && (
                    <div className={styles.statusField}>
                      <span className={styles.statusLabel}>Mentor</span>
                      <span className={styles.statusValue}>
                        {getMentorLabel(activeRequest.acceptedBy)}
                      </span>
                    </div>
                  )}

                  {activeRequest.status === "pending" && (
                    <p className={styles.statusHint}>
                      A mentor will be with you shortly...
                    </p>
                  )}
                </div>

                <div className={styles.actionRow}>
                  <button
                    type="button"
                    className={styles.closeInline}
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={handleNewRequest}
                  >
                    New Request
                  </button>
                </div>
              </div>
            ) : (
              /* ── FORM VIEW ── */
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Team Name</label>
                  <input
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                  />
                  {errors.teamName && (
                    <p className={styles.error}>{errors.teamName}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Table Number</label>
                  <input
                    name="tableNumber"
                    value={formData.tableNumber}
                    onChange={handleChange}
                  />
                  {errors.tableNumber && (
                    <p className={styles.error}>{errors.tableNumber}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Query Category</label>
                  <div
                    className={`${styles.dropdown} ${
                      dropdownOpenUp ? styles.dropdownOpenUp : ""
                    }`}
                  >
                    <button
                      ref={dropdownButtonRef}
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {formData.queryCategory || "Select a category"}
                    </button>
                    {dropdownOpen && (
                      <ul
                        ref={dropdownMenuRef}
                        style={
                          dropdownMenuMaxHeight !== null
                            ? { maxHeight: `${dropdownMenuMaxHeight}px` }
                            : undefined
                        }
                      >
                        {queryCategories.map((cat) => (
                          <li
                            key={cat}
                            onClick={() => {
                              setFormData({ ...formData, queryCategory: cat });
                              setDropdownOpen(false);
                              setErrors({ ...errors, queryCategory: "" });
                            }}
                          >
                            {cat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {errors.queryCategory && (
                    <p className={styles.error}>{errors.queryCategory}</p>
                  )}
                </div>

                {submitError && <p className={styles.error}>{submitError}</p>}

                <div className={styles.actionRow}>
                  <button
                    type="button"
                    className={styles.closeInline}
                    onClick={closeModal}
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAMentor;
