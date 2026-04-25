import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { PersonContext } from './ContextProvider';

const Stat = () => {
    const { c = 0, t = 0, v = 0 } = useContext(PersonContext);

    const data = [
        { name: 'Text', value: t, fill: '#0088FE' },
        { name: 'Call', value: c, fill: '#00C49F' },
        { name: 'Video', value: v, fill: '#FFBB28' },
    ];

    const isEmpty = t === 0 && c === 0 && v === 0;

    return (
        <div style={{ width: '100%', height: 400 }}>
            {isEmpty ? (
                <p className="text-center mt-10 text-gray-500">
                    No stats available yet 📊
                </p>
            ) : (
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={80}
                            outerRadius={120}
                            cornerRadius={10}
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default Stat;