import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { RippleModule } from 'primeng/ripple';

// ✅ Módulos necesarios para Avatar, Tag, Divider y ProgressBar
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    ChartModule,
    AvatarModule,
    TagModule,
    DividerModule,
    ProgressBarModule,
    RippleModule
  ],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Personal Wallet',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40, 95]
      },
      {
        label: 'Corporate Wallet',
        backgroundColor: '#66BB6A',
        data: [28, 48, 40, 19, 86, 27, 90, 70]
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  transactions = [
    { id: 1254, name: 'Amy Yelsner', initials: 'AY', coin: 'BTC', date: 'May 5th', type: 'Buy', amount: '3.005 BTC' },
    { id: 2355, name: 'Anna Fali', initials: 'AF', coin: 'ETH', date: 'Mar 17th', type: 'Buy', amount: '0.050 ETH' },
    { id: 1235, name: 'Stepen Shaw', initials: 'SS', coin: 'BTC', date: 'May 24th', type: 'Sell', amount: '3.050 BTC' }
  ];
}