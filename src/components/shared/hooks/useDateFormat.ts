import { useTranslation } from 'react-i18next';

export const useDateFormat = (date: string | undefined): string => {
    const { t } = useTranslation();
    if (!date) {
        return '';
    }
    const now = new Date();
    const dateObj = new Date(date);
    const diff = now.getTime() - dateObj.getTime();
    const hours = diff / (1000 * 60 * 60);
    const days = hours / 24;
    const months = days / 30;
    const years = months / 12;
    if (hours < 1) {
        const count = Math.round(hours * 60);
        if (count === 0) {
            return t('date.now');
        }
        return t('date.minute', { count });
    }
    if (days < 1) {
        const count = Math.round(hours);
        return t('date.hour', { count });
    }
    if (months < 1) {
        const count = Math.round(days);
        return t('date.day', { count });
    }
    if (years < 1) {
        const count = Math.round(months);
        return t('date.month', { count });
    }
    const count = Math.round(years);
    return t('date.year', { count });
};
