/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentData {
  title: string;
}

class Component<T extends ComponentData> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentData> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
