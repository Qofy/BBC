  import '../stylesheet/body-2.css';
  import bird from '../images/bird.webp';
  import imgc from '../images/img-c.webp';

function Body2() {
    return (
        <div className="body-2">
            <h3>
              Only from the BBC
            </h3>
            <section>
                <div className="cont-1">
                  <img className='imgc' src={imgc} alt="kid" />
                  
                    <a href="#">
                      <h3>
                    Can families returning after centuries solve S Korea's population crisis?
                    </h3>
                    </a>
                  
                  <p className="headline-b2">
                  Ethnic Koreans, whose ancestors migrated to Russia, are returning, but the move can be difficult.
                  </p>
                  <p className="day">
                    9 day ago | <p className="location">World</p>
                    </p>
                </div>

                <div className="cont2">
                 <img className='imgc' src={bird} alt="bird" />

                 <a href="#">
                      <h3>
                      Meet Pesto: the fat baby penguin and viral superstar
                    </h3>
                    </a>
                  
                  <p className="headline-b2">
                  The obscenely fluffy nine-month-old chick weighs more than both of his foster parents combined.
                  </p>
                  <p className="day">
                    5 day ago | <p className="location">World</p>
                    </p>
                </div>
            </section>

        </div>
    )
}
export default Body2