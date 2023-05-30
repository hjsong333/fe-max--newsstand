import { createElement } from '../utils/domUtils';
import style from './NewsStand.module.css';
import Header from './header/Header';
import Main from './main/Main';
import NewsBar from './newsBar/NewsBar';

type NewsStandProps = {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscriptionInfo: number[];
};

export default class NewsStand {
  public element;
  private header: Header;
  private newsBar: NewsBar;
  private main: Main;

  constructor(props: NewsStandProps) {
    this.element = createElement('div', { class: style.news_stand});

    this.header = new Header({ dateInfo: props.dateInfo });
    this.newsBar = new NewsBar();
    this.main = new Main({ gridInfo: props.gridInfo, subscriptionInfo: props.subscriptionInfo });

    this.element.append(this.header.element, this.newsBar.element, this.main.element);
  }

  updateProps(props: NewsStandProps) {
    this.main.updateProps({ gridInfo: props.gridInfo, subscriptionInfo: props.subscriptionInfo });
  }
}
