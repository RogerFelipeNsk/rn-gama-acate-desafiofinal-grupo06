import styled from "styled-components/native";
import { widthScreen } from "../../global/GlobalStyles";

export const TextDescription = styled.Text`
    color: #fff;
    text-align: center;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 22px;
` 
export const ContainerIndicators = styled.View`
    width: ${widthScreen}px; 
    flex-direction: row; 
    justify-content: center; 
    position: absolute; 
    bottom: 20px;
`

export const Indicator = styled.View`
    width: 12px; 
    height: 12px; 
    border-radius: 6px; 
    margin: 6px;
`