import CodecellLogo from "../../assets/codecell.svg";
import VESITLogo from "../../assets/VESIT.png";

function SyrusFooter() {
  return (
    <div className="syrus-footer">
      <div className="syrus-footer-codecell">
        <img src={CodecellLogo} />
        CodeCell
      </div>
      <div className="syrus-footer-vesit">
        <div className="vesit-name">
          <img src={VESITLogo} />
          Vivekanand Education Society's Institute Of Technology
        </div>
        <div className="vesit-address">
          Hashu Adwani Memorial Complex, Collector's Colony, Chembur, Mumbai,
          Maharashtra, 400074
        </div>
      </div>

      <div className="syrus-footer-info">
        © 2024-2025 CodeCell VESIT. All Rights Reserved.
      </div>
      <div className="syrus-footer-socials">
        <a
          href="https://www.linkedin.com/company/vesit-tinkers-codecell-computer-department"
          target="_blank"
        >
          <svg
            fill="#c0c0c0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="clamp(2rem, 7vw, 2.65rem)"
            height="clamp(2rem, 7vw, 2.65rem)"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/codecell_vesit/" target="_blank">
          <svg
            fill="#c0c0c0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="clamp(2rem, 8vw, 2.65rem)"
            height="clamp(2rem, 8vw, 2.65rem)"
            viewBox="0 0 24 24"
          >
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
          </svg>
        </a>
        <a href="https://github.com/CMPN-CODECELL" target="_blank">
          <svg
            fill="#c0c0c0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="clamp(2rem, 8vw, 2.65rem)"
            height="clamp(2rem, 8vw, 2.65rem)"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </a>
      </div>
    </div>

  )
}

export default SyrusFooter