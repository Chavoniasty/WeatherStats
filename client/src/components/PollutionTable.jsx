import React, { useState } from 'react';

function PollutionTable({ stats, setStats }) {
    const [sortKey, setSortKey] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    function sort(key) {
        if (sortKey === key) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    const sortedStats = [...stats].sort((a, b) => {
        const aValue = sortKey ? a[sortKey] : null;
        const bValue = sortKey ? b[sortKey] : null;

        if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        } else {
            return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        }
    });

    function showSortMarker(key) {
        if (sortKey === key) {
            return sortDirection === 'asc' ? '▲' : '▼';
        }
        return null;
    };

    function deleteStat(index) {
        const updatedStats = [...stats];
        updatedStats.splice(index, 1);
        setStats(updatedStats);
    };

    return (
        <div className='mt-4'>
            <table className="w-full text-center table-fixed">
                <thead className='text-orange-400 border-b-2 border-orange-400'>
                    <tr>
                        <th className=' w-min'>

                        </th>
                        <th onClick={() => sort('city')}>
                            City {showSortMarker('city')}
                        </th>
                        <th className='bg-orange-100/60' onClick={() => sort('co')}>
                            CO {showSortMarker('co')}
                        </th>
                        <th onClick={() => sort('no')}>
                            NO {showSortMarker('no')}
                        </th>
                        <th className='bg-orange-100/60' onClick={() => sort('no2')}>
                            NO2 {showSortMarker('no2')}
                        </th>
                        <th onClick={() => sort('o3')}>
                            O3 {showSortMarker('o3')}
                        </th>
                        <th className='bg-orange-100/60' onClick={() => sort('pm10')}>
                            PM10 {showSortMarker('pm10')}
                        </th>
                        <th onClick={() => sort('pm2_5')}>
                            PM2.5 {showSortMarker('pm2_5')}
                        </th>
                        <th className='bg-orange-100/60' onClick={() => sort('so2')}>
                            SO2 {showSortMarker('so2')}
                        </th>
                        <th onClick={() => sort('aqi')}>
                            Air Quality Index {showSortMarker('aqi')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStats.map((stat, index) => (
                        <tr key={index} className='border-b-2 border-orange-100/35'>
                            <td className=' w-min'>
                                <button onClick={() => deleteStat(index)} className='text-red-300'>X</button>
                            </td>
                            <td className='flex justify-center'>
                                {stat.city}
                            </td>
                            <td className='bg-orange-100/60'>{stat.co}</td>
                            <td>{stat.no}</td>
                            <td className='bg-orange-100/60'>{stat.no2}</td>
                            <td>{stat.o3}</td>
                            <td className='bg-orange-100/60'>{stat.pm10}</td>
                            <td>{stat.pm2_5}</td>
                            <td className='bg-orange-100/60'>{stat.so2}</td>
                            <td>{stat.aqi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PollutionTable;
