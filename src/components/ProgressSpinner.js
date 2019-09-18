import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ScaleLoader } from 'react-spinners';

export default function ProgressSpinner() {
    return (
        <ScaleLoader
            sizeUnit={"px"}
            height={40}
            width={5}
            radius={2}
            margin={'2px'}
            color={"#282c34"}
            loading={true}
        />
    )
}