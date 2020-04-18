import * as React from "react"
import * as ReactTransitionGroup from "react-transition-group"
import {CardDetail} from "./Rules"

import "./family-match.css";

interface ICardProps {
  card: CardDetail;
  onFlip: (imageName: number) => void;
  flipHappened: () => void;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <div className="card">
      <ReactTransitionGroup.CSSTransition
        in={props.card.isShowing}
        timeout={1000}
        classNames="card-contents"
        onEntered={() => {props.flipHappened()}}
      >
        <div
          className="card-contents"
          onClick={() => {
            props.onFlip(props.card.id-1);
          }}
        >
          <div className="card-back"></div>
          <div className="card-face">
            <img src={require(`./images/${props.card.value}.jpg`)} alt="who-is-it"/>
          </div>
        </div>
      </ReactTransitionGroup.CSSTransition>
    </div>
  );
};

export default Card;
