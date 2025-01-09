import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const {t} = useTranslation();
    return(
        <header>
            <nav>
                <div>
                    <ul>
                        <li>
                            {t("whoWeAre")}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;