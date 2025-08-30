import { ChartData, ChartOptions } from 'chart.js';
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { TimeBaseChartData } from '../admin-dashboard.query';
import { chartFontFamily } from '../chart-options.constant';

type Props = {
  joinedUsers: TimeBaseChartData;
};

const AdminCustomerChart = (props: Props) => {
  const totalOrders = props.joinedUsers.data.reduce(
    (acc, item) => acc + item,
    0,
  );

  const stepLineData: ChartData<'line'> = {
    datasets: [
      {
        data: props.joinedUsers.data, // data and labels length should be equal
        borderColor: '#165BAA',
        backgroundColor: '#63ABFD',
        label: 'Users joined', // equality of this field with "labels" field is not important
        stepped: true,
      },
    ],
    labels: props.joinedUsers.labels,
  };

  const stepLineOptions: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      font: { family: chartFontFamily },
      maintainAspectRatio: false,
      animation: { delay: 0, easing: 'easeOutQuad' },
      plugins: {
        tooltip: {
          backgroundColor: '#fff',
          animation: { duration: 100, easing: 'linear' },
          bodyColor: '#000',
          titleColor: '#000',
          cornerRadius: 6,
          boxPadding: 8,
          padding: 12,
          borderColor: '#CBD5E1',
          borderWidth: 1,
          titleFont: { size: 16, family: chartFontFamily },
          bodyFont: { size: 14, family: chartFontFamily },
        },
        legend: {
          position: 'bottom' as const,
          labels: { font: { family: chartFontFamily } },
        },
      },
    }),
    [],
  );

  return (
    <section className="bg-white border border-nature-800 mt-8 rounded-xl">
      <div className="py-7 px-14 border-b border-nature-900">
        <p className="font-semibold text-[#828282]">USERS JOINED</p>
        <p className="font-medium text-[40px] mt-1">{totalOrders}</p>
      </div>
      <div className="mt-7 h-[300px] px-8 pb-8">
        <Line options={stepLineOptions} data={stepLineData} />
      </div>
    </section>
  );
};

export default AdminCustomerChart;
