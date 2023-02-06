import React, { useState } from "react";
import "./Tabbed.css";
import {
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
  BsFillSuitHeartFill,
} from "react-icons/bs";

type Props = {};

const Tabbed = (props: Props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="container">
        <div className="title">BUTTON TABS</div>
        <div className="block-tabs">
          <button
            className={
              toggleState === 1
                ? "tabs button-tab active-button-tabs"
                : "button-tab tabs"
            }
            onClick={() => toggleTab(1)}
          >
            HISTORY
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs button-tab active-button-tabs"
                : "button-tab tabs"
            }
            onClick={() => toggleTab(2)}
          >
            APPROACH
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs button-tab active-button-tabs"
                : "button-tab tabs"
            }
            onClick={() => toggleTab(3)}
          >
            CULTURE
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs button-tab active-button-tabs"
                : "button-tab tabs"
            }
            onClick={() => toggleTab(4)}
          >
            METHOD
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est.
            </p>
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title">ICON TABS</div>
        <div className="block-tabs">
          <button
            className={
              toggleState === 1
                ? "tabs icon-tab active-icon-tabs"
                : "icon-tab tabs"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="icon">
              <BsFillSuitSpadeFill />
            </div>
            <span>HISTORY</span>
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs icon-tab active-icon-tabs"
                : "icon-tab tabs"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="icon">
              <BsFillSuitClubFill />
            </div>
            <span>APPROACH</span>
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs icon-tab active-icon-tabs"
                : "icon-tab tabs"
            }
            onClick={() => toggleTab(3)}
          >
            <div className="icon">
              <BsFillSuitDiamondFill />
            </div>
            <span>CULTURE</span>
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs icon-tab active-icon-tabs"
                : "icon-tab tabs"
            }
            onClick={() => toggleTab(4)}
          >
            <div className="icon">
              <BsFillSuitHeartFill />
            </div>
            <span>METHOD</span>
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est.
            </p>
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title">TEXT TABS</div>
        <div className="block-tabs">
          <button
            className={
              toggleState === 1
                ? "tabs  text-tab active-text-tabs"
                : "tabs text-tab"
            }
            onClick={() => toggleTab(1)}
          >
            HISTORY
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs text-tab active-text-tabs"
                : "tabs text-tab"
            }
            onClick={() => toggleTab(2)}
          >
            APPROACH
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs text-tab active-text-tabs"
                : "tabs text-tab"
            }
            onClick={() => toggleTab(3)}
          >
            CULTURE
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs text-tab active-text-tabs"
                : "tabs text-tab"
            }
            onClick={() => toggleTab(4)}
          >
            METHOD
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est.
            </p>
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title">VERTICAL BUTTONS</div>
        <div className="d-flex">
          <div className="block-tabs-vertical">
            <button
              className={
                toggleState === 1
                  ? "vertical-tab active-vertical-tabs"
                  : "vertical-tab"
              }
              onClick={() => toggleTab(1)}
            >
              HISTORY
            </button>
            <button
              className={
                toggleState === 2
                  ? "vertical-tab active-vertical-tabs"
                  : "vertical-tab"
              }
              onClick={() => toggleTab(2)}
            >
              APPROACH
            </button>
            <button
              className={
                toggleState === 3
                  ? "vertical-tab active-vertical-tabs"
                  : "vertical-tab"
              }
              onClick={() => toggleTab(3)}
            >
              CULTURE
            </button>
            <button
              className={
                toggleState === 4
                  ? "vertical-tab active-vertical-tabs"
                  : "vertical-tab"
              }
              onClick={() => toggleTab(4)}
            >
              METHOD
            </button>
          </div>

          <div className="content-tabs-vertical">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <p>LET'S TALK TABS</p>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <p>COOL TABS</p>
              <hr />
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <p>SHORTER TABS</p>
              <hr />
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est.
              </p>
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <p>LONGER TABS</p>
              <hr />
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabbed;
