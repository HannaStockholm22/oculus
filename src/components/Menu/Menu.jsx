import ls from './Menu.module.css';

export const Menu =({elements})=>{

    const EachEl = elements.map((e) => {
        return (
          <li className={ls.list}>
            <a className={ls.link} href="#">
              {e.name}
            </a>
          </li>
        );
      });
  
    return (
        <ul className={ls.menu}>{EachEl}</ul>
    );
};
