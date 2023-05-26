import { FC, useState } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useCommentCreateMutation } from '@api/posts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ComponentProps {
    postId: string;
}
export const CommentInput: FC<ComponentProps> = ({ postId }) => {
    const [comment, setComment] = useState<string>('');
    const { t } = useTranslation();
    const { bottom } = useSafeAreaInsets();

    const { mutate: createComment } = useCommentCreateMutation(postId);

    const handleComment = () => {
        createComment(comment);
        setComment('');
        Keyboard.dismiss();
    };

    return (
        <Container bottom={bottom / 2}>
            <CustomTextInput
                placeholder={t('postDetails.writeComment') as string}
                value={comment}
                multiline={true}
                onChangeText={setComment}
            />
            <Button onPress={handleComment}>
                <Icon name={'paper-plane'} size={20} color={colors.blue} />
            </Button>
        </Container>
    );
};

const Container = styled.View<{ bottom: number }>(({ bottom }) => ({
    width: '90%',
    margin: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: bottom,
    borderRadius: 10,
    backgroundColor: colors.lightBlue,
    justifySelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
}));

const Button = styled.TouchableOpacity({
    height: 20,
    width: 20,
});

const CustomTextInput = styled.TextInput({
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    marginTop: 5,
});
