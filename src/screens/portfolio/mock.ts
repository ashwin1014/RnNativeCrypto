const holdings = [
    {
        symbol: 'ETHUSDT',
        notional: 1.5678,
        qty: 10,
        upnl: 0.45,
        productId: 456,
    },
    {
        symbol: 'BTCUSDT',
        notional: 2.3456,
        qty: 8,
        upnl: 0.67,
        productId: 789,
    },
    {
        symbol: 'XRPUSDT',
        notional: 3.4567,
        qty: 15,
        upnl: 0.89,
        productId: 101,
    },
    {
        symbol: 'DODGEUSD',
        notional: 4.5678,
        qty: 20,
        upnl: 0.12,
        productId: 112,
    },
    {
        symbol: 'ADAUSDT',
        notional: 5.6789,
        qty: 25,
        upnl: 0.34,
        productId: 223,
    },
    {
        symbol: 'SOLUSDT',
        notional: 6.7890,
        qty: 30,
        upnl: 0.56,
        productId: 334,
    },
];

interface Holding {
    symbol: string;
    notional: number;
    qty: number;
    upnl: number;
    productId: number;
}

export type { Holding };
export { holdings };
