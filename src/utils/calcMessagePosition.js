const TOP_END = 29;
const LEFT_END = 28;
const CENTER_BOX = [
    {top: 12, left: 11},
    {top: 12, left: 12},
    {top: 12, left: 13},
    {top: 12, left: 14},
    {top: 12, left: 15},
    {top: 12, left: 16},
    {top: 13, left: 11},
    {top: 13, left: 12},
    {top: 13, left: 13},
    {top: 13, left: 14},
    {top: 13, left: 15},
    {top: 13, left: 16},
    {top: 14, left: 11},
    {top: 14, left: 12},
    {top: 14, left: 13},
    {top: 14, left: 14},
    {top: 14, left: 15},
    {top: 14, left: 16},
    {top: 15, left: 11},
    {top: 15, left: 12},
    {top: 15, left: 13},
    {top: 15, left: 14},
    {top: 15, left: 15},
    {top: 15, left: 16},
    {top: 16, left: 11},
    {top: 16, left: 12},
    {top: 16, left: 13},
    {top: 16, left: 14},
    {top: 16, left: 15},
    {top: 16, left: 16}
]

export const calcMessagePosition = (usedBoxes) => {
    let top = null
    let left = null

    while (
        top === null || 
        left === null || 
        CENTER_BOX.find(item => JSON.stringify(item) === JSON.stringify({ top: top, left: left })) ||
        usedBoxes.find(item => JSON.stringify(item) === JSON.stringify({ top: top, left: left }) || JSON.stringify(item) === JSON.stringify({ top: top, left: left +1 }) || JSON.stringify(item) === JSON.stringify({ top: top, left: left +2 }))
    ) {
        top = Math.round(Math.random() * TOP_END)
        left = Math.round(Math.random() * LEFT_END)
    }

    return { 
        top, 
        left, 
        newUsedBoxes: [ 
            { top: top, left: left }, 
            { top: top, left: left +1 },
            { top: top, left: left +2 }
        ]
    }
}