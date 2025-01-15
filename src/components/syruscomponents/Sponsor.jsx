import Github from '../../assets/sponsors/github.png'
import Bronze from '../../assets/sponsors/bronze.png'
import Microsoft from '../../assets/sponsors/microsoft.png'
import replit from '../../assets/sponsors/replit.png'
import Devfolio from '../../assets/sponsors/devfolio.png'
import Filecoin from '../../assets/sponsors/filecoin.png'

function Sponsor() {
  return (
    <section id="sponsors" className="bg-[#121211] py-6 text-white">
    <div className=' container mx-auto px-2 py-2'>
        <h2 className="internal-headings" data-text="SPONSORS">SPONSORS</h2>
    </div>
    <div className="main_sponsor">
                <div className="sponsor-container">
                    <div className="sponsorItems">
                        <div>
                            <img src={Github} alt="sponsor" className="sponsor_img" />
                        </div>
                        <div>
                            <img src={Bronze} alt="sponsor" className="sponsor_img" />
                        </div>
                        <div>
                            <img src={Devfolio} alt="sponsor" className="sponsor_img" />
                        </div>
                        <div>
                            <img src={Microsoft} alt="sponsor" className="sponsor_img" />
                        </div>
                        <div>
                            <img src={replit} alt="sponsor" className="sponsor_img" />
                        </div>
                        <div>
                            <img src={Filecoin} alt="sponsor" className="sponsor_img" />
                        </div>
                    </div>
                </div>
    </div>
</section>

  )
}

export default Sponsor