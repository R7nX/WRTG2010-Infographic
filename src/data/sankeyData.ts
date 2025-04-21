const COLORS = ['#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#e74c3c'];

const RAW_VALUES = {
    extraction: 82500,    // t lithium
    processing: 122000,   // kt cobalt
    assembly: 300,        // composite index
    operation: 340000,    // GWh → 340 TWh
    training: 945000,     // GWh → 945 TWh
};

export const detailedSankey = {
    nodes: [
        { name: 'Extraction', fill: COLORS[0] },
        { name: 'Processing', fill: COLORS[1] },
        { name: 'Assembly', fill: COLORS[2] },
        { name: 'Operation', fill: COLORS[3] },
        { name: 'Training', fill: COLORS[4] },
    ],
    links: [
        {
            source: 0,
            target: 1,
            raw: RAW_VALUES.extraction,
            value: Math.log10(RAW_VALUES.extraction),    // ≈4.92
        },
        {
            source: 1,
            target: 2,
            raw: RAW_VALUES.processing,
            value: Math.log10(RAW_VALUES.processing),   // ≈5.09
        },
        {
            source: 2,
            target: 3,
            raw: RAW_VALUES.assembly,
            value: Math.log10(RAW_VALUES.assembly),     // ≈2.48
        },
        {
            source: 3,
            target: 4,
            raw: RAW_VALUES.training,
            value: Math.log10(RAW_VALUES.training),     // ≈5.98
        },
    ],
};