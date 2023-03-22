import ls from './Menu.module.css';

export const Menu =({elements})=>{

    const eachEl = elements.map((e) => {
        return (
          <li className={ls.list}>
            <a className={ls.link} href="#">
              {e.name}
            </a>
          </li>
        );
      });
  
    return (
        <ul className={ls.menu}>{eachEl}</ul>
    );
};
