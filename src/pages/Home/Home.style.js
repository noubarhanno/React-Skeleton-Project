import { variant } from 'styled-system';
import styled from '@emotion/styled';

export const Wrapper = styled.section`
    ${variant({
        variants:{
            primary:{
                backgroundColor: "blue"
            },
            secondary:{
                backgroundColor: "red"
            }

        }
    })}
`