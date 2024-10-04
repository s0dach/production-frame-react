import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Меню')}
            <Counter />
        </div>
    );
};

export default MainPage;
