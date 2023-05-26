import { UserInterface } from '@types';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';

interface ComponentProps {
    users: UserInterface[];
}

const ItemContainer = styled(View)({
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
});
export const UsersSummary = ({ users }: ComponentProps) => {
    const renderItem = ({
        item: { firstName, lastName },
    }: {
        item: UserInterface;
    }) => (
        <ItemContainer>
            <Text>
                {firstName} {lastName}
            </Text>
        </ItemContainer>
    );

    return (
        <>
            <FlatList
                style={{ width: '80%', flexGrow: 0 }}
                data={users}
                renderItem={renderItem}
            />
        </>
    );
};
