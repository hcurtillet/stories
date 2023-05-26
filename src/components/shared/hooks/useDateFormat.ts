import { useTranslation } from 'react-i18next';

export const useDateFormat = (
    date: string | undefined,
    isAbbreviated: boolean,
): string => {
    const { t } = useTranslation();
    if (!date) {
        return '';
    }

    const generateKey = (primaryKey: string, count: number): string => {
        if (isAbbreviated) {
            return t(`${primaryKey}.abbreviated`, { count });
        }
        if (count === 1) {
            return t(`${primaryKey}.singular`);
        }
        return t(`${primaryKey}.plural`, { count });
    };
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
        return generateKey('date.minute', count);
    }
    if (days < 1) {
        const count = Math.round(hours);
        return generateKey('date.hour', count);
    }
    if (months < 1) {
        const count = Math.round(days);
        return generateKey('date.day', count);
    }
    if (years < 1) {
        const count = Math.round(months);
        return generateKey('date.month', count);
    }
    const count = Math.round(years);
    return generateKey('date.year', count);
};
