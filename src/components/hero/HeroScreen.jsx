import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( heroId ), [ heroId ] );
  
  const handleReturn = () => {
    navigate( -1 );
  }

  if ( !hero ) {
    return <Navigate to="/"/>
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  const img = `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
        <div className="col-4">
          <img src = { img } alt = { superhero } className="img-thumbnail animate__animated animate__fadeInLeft"/>
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3> { hero.superhero } </h3>
          <ul className="list-group"> 
            <li className="list-group-item">
              <b>Alter ego:</b> { alter_ego }
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> { publisher }
            </li>
            <li className="list-group-item">
              <b>First appearance:</b> { first_appearance }
            </li>
          </ul>

          <h5>Characters</h5>
          <p>{ characters }</p>

          <button
            className="btn btn-primary"
            onClick = { handleReturn }
          >
            Return
          </button>

        </div>
    </div>
  )
}
