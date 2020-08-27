import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, OnlyText, Input, ConvertButton, ButtonContainer, ButtonText } from './styles';

const TxtToBin = () => {
  return (
    <Container>
      <OnlyText>Text:</OnlyText>
      <Input 
        multiline={true}
        textAlignVertical="top"
      />
      <ButtonContainer>
        <ConvertButton>
          <OnlyText>CONVERT</OnlyText>
        </ConvertButton>
      </ButtonContainer>
      <OnlyText>Resulting Binary:</OnlyText>
      <Input 
        multiline={true}
        textAlignVertical="top"
        editable={false}
        placeholder="The encoded text will appear here as binary"
      />
    </Container>
  );
}

export default TxtToBin;