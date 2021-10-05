import { Fragment } from "react";
import Card from "./Bootstrap/Card";
import FBBox from "./FBBox";

const Feed = ({ Birthdays, Pages, NewsFeeds }) => {
  return (
    <div className="col-3 Feed">
      {Birthdays && Birthdays.length > 0 && (
        <FBBox>
          <div className="BirthdayContainer">
          <h4>Birthdays !!!</h4>
                <img src="https://cdn-icons-png.flaticon.com/512/1139/1139982.png" alt="Gift" />
            {Birthdays.map(user => (
              <Fragment key={user.FullName}>
                <a href={user.ProfileURL}>{user.FullName}</a>
                {", "}
              </Fragment>
            ))}
            and 3 others.
          </div>
        </FBBox>
      )}
      {Pages && Pages.length > 0 && (
        <FBBox>
          <div className="PagesContainer">
            <h4>
              Your Pages <span>({Pages.length})</span>
            </h4>
            <ul>
              {Pages.map(page => (
                <li key={page.Avatar}>
                  <img src={page.Avatar} alt={page.Name} />
                  <div className="PageMeta">
                    <a href={page.PageURL}>
                      <strong>{page.Name}</strong>
                    </a>
                    <a href="/">
                      <img
                        src="https://img-premium.flaticon.com/png/512/1306/premium/1306155.png?token=exp=1631972510~hmac=735264f21230110fcad71ce62779687d"
                        alt="Messages"
                      />
                      Messages ({page.MessageCount})
                    </a>
                    <a href="/">
                      <img
                        src="https://img-premium.flaticon.com/png/512/1289/premium/1289475.png?token=exp=1631972734~hmac=ea71c52f9703726c4d107107d2d1cac3"
                        alt="Notifications"
                      />
                      Notifications ({page.NotificationCount})
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FBBox>
      )}
      {NewsFeeds && NewsFeeds.length && (
        <FBBox>
          <div className="FeedsContainer">
            <h4 className="m-0">News Feed</h4>
            <ul>
              {NewsFeeds.map((card, key) => (
                <li key={key}>
                  <Card Image={card.Image} ImgAlign="top">
                    <a href={card.NewsLink}>{card.Title}</a>
                    <p className="m-0 text-muted">
                      Posted{" "}
                      <abbr title={card.DateTime}>{card.DatePosted}</abbr>
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </FBBox>
      )}
    </div>
  );
};

export default Feed;