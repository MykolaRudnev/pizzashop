import React from 'react'
import styled from "styled-components";

const ToppingGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
`;
const ToppingCheckbox = styled.input`
    margin-right: 10px;
    cursore: pointer;
`;

const CheckboxLabel = styled.label`
    cursore: pointer;
`;

export function Toppings({toppings, checkTopping}) {
    return(
        <ToppingGrid>
            {toppings.map((topping, i) =>(
            <CheckboxLabel>
                <ToppingCheckbox  
                type="checkbox" 
                checked={toppings.checked}
                onClick={() => {
                    checkTopping(i)
                }}
                />
                {topping.name}
            </CheckboxLabel>
            ))}
        </ToppingGrid>
    )
}