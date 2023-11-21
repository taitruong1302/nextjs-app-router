import React from 'react';
import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
    return (
        <div>
            <h2>Loading...</h2>
            <CircularProgress size="lg" aria-label="Loading..." />
        </div>
    );
}
