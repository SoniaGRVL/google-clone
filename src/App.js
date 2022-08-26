import loginImg from './img/login.jpg';
import logoImg from './img/googleLogo.png';
import carbonImg from './img/carbon.png';

function App() {
  return (
    <div className='allPage'>
      <div className='sectionPage sectionHeader'>
        <div className='header'>
          <div className='headerInner'>
            <div className='headerContent'>
              <div>
                <div className='contentLink'>
                  <div className='links'>
                    <a className='link' href='https://mail.google.com/mail'>Gmail</a>
                  </div>
                  <div className='links'>
                    <a className='link' href='https://www.google.fr/imghp'>Images</a>
                  </div>
                </div>
              </div>
              <div className='contentRight'>
                <div className='contentApp'>
                  <div className='contentAppcompo'>
                    <div className='linkApp'>
                      <a className='linkRight app'>
                      <svg className="appSVG" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='contentLogin'>
                  <div className='linkLogin'>
                    <a className='linkRight login' href='https://accounts.google.com'>
                      <img className='loginImg' alt="login" src={loginImg}/>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className='sectionPage sectionLogo'>
        <div className='logoContent'>
          <img className='logoImg' alt='GoogleLogo' src={logoImg}/>
        </div>
      </div>
      <div className='sectionPage sectionSearch'>
        <form>
          <div>
            <div className='searchContent'>
              <div className='inputPart'>
                <div className='inputPartContent'>
                  <div className='inputIcon'>
                    <div className='inputMargin'>
                      <span className='icon'>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      </span>
                    </div>
                  </div>
                  <div className='inputContent'>
                    <div className='inner'>
                      <input className='input'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='btnPart'>
                <center>
                  <input className='search' value="Recherche Google" type="submit"/>
                  <input className='lucky' value="J'ai de la chance" type="submit"/>
                </center>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='sectionPage sectionLang'>
        <div className='langContent'>
          <div className='langLink'>
            Google disponible en : 
            <a className='lang' href='https://www.google.com'>English</a>
          </div>
        </div>
      </div>
      <div className='sectionPage sectionFooter'>
        <div className='country'>France</div>
        <div className='footerContent footer'>
          <div className='footerContent optionsPart'>
            <a className='optionsLink' href='https://about.google/'>À propos</a>
            <a className='optionsLink' href='https://ads.google.com'>Publicité</a>
            <a className='optionsLink' href='https://smallbusiness.withgoogle.com'>Entreprise</a>
            <a className='optionsLink' href='https://www.google.com/search/howsearchworks'>Comment fonctionne la recherche Google ?</a>
          </div>
          <div className='footerContent carbonPart'>
            <a className='optionsLink' href='https://sustainability.google/intl/fr'>
              <img className='optionsImg' alt='carbonImg' src={carbonImg}/>
              <span className='optionsText'>Neutre en carbone depuis 2007</span>
            </a>
          </div>
          <div className='footerContent otherOptions'>
            <a className='optionsLink'>Signaler un contenu inapproprié</a>
            <a className='optionsLink'>Info consommateurs</a>
            <a className='optionsLink'>Confidentialité</a>
            <a className='optionsLink'>Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
