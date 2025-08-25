import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector-financing',
  templateUrl: './sector-financing.component.html',
  styleUrls: ['./sector-financing.component.scss']
})
export class SectorFinancingComponent implements OnInit {
  
  // Sector financing data for the circle diagram
  sectorData = [
    {
      name: 'Урсгал зардал',
      value: 26,
      color: '#22C55E', // Green
      description: 'Урсгал шилжүүлэг, Бараа үйлчилгээний бусад, Цалин хөлс, Татаас, Зээлийн хүүгийн төлбөр',
      amount: '26,726.3 тэрбум',
      icon: 'bi-arrow-repeat',
      details: [
        { name: 'Урсгал шилжүүлэг', amount: '26,726.3 тэрбум' },
        { name: 'Бараа үйлчилгээний бусад', amount: '5,092.5 тэрбум' },
        { name: 'Цалин хөлс', amount: '6,701.3 тэрбум' },
        { name: 'Татаас', amount: '1,015.1 тэрбум' },
        { name: 'Зээлийн хүүгийн төлбөр', amount: '1,638.1 тэрбум' }
      ]
    },
    {
      name: 'Хөрөнгийн зардал',
      value: 10,
      color: '#3B82F6', // Blue
      description: 'Бусад хөрөнгө, Барилга байгууламж, Тоног төхөөрөмж, Их засвар, Стратегийн нөөц хөрөнгө',
      amount: '9,862.2 тэрбум',
      icon: 'bi-building',
      details: [
        { name: 'Барилга байгууламж', amount: '6,732.8 тэрбум' },
        { name: 'Тоног төхөөрөмж', amount: '839.2 тэрбум' },
        { name: 'Их засвар', amount: '527.8 тэрбум' },
        { name: 'Стратегийн нөөц хөрөнгө', amount: '14.1 тэрбум' },
        { name: 'Бусад хөрөнгө', amount: '1,748.3 тэрбум' }
      ]
    },
    {
      name: 'Эргэж төлөгдөх цэвэр зээл',
      value: 20,
      color: '#F59E0B', // Amber
      description: 'Дотоод зээл, Гадаад зээл',
      amount: '102.9 тэрбум',
      icon: 'bi-credit-card',
      details: [
        { name: 'Дотоод зээл', amount: '330 тэрбум' },
        { name: 'Гадаад зээл', amount: '227.1 тэрбум' }
      ]
    }
  ];

  totalValue = 0;
  totalAmount = '6,502.7 тэрбум ';
  animationComplete = false;

  constructor() { }

  ngOnInit(): void {
    this.totalValue = this.sectorData.reduce((sum, item) => sum + item.value, 0);
    
    // Trigger animation after component loads
    setTimeout(() => {
      this.animationComplete = true;
    }, 500);
  }

  // Calculate the stroke-dasharray and stroke-dashoffset for each segment
  getStrokeDashArray(value: number): string {
    const circumference = 2 * Math.PI * 120; // radius = 120
    const percentage = (value / this.totalValue) * 100;
    const strokeLength = (percentage / 100) * circumference;
    return `${strokeLength} ${circumference - strokeLength}`;
  }

  getStrokeDashOffset(index: number): number {
    const circumference = 2 * Math.PI * 120;
    let offset = 0;
    
    for (let i = 0; i < index; i++) {
      const percentage = (this.sectorData[i].value / this.totalValue) * 100;
      const strokeLength = (percentage / 100) * circumference;
      offset += strokeLength;
    }
    
    return -offset;
  }

  // Generate SVG path for pie chart segments (matching financial-sources style)
  getSegmentPath(index: number): string {
    const centerX = 150;
    const centerY = 150;
    const radius = 100;
    
    // Calculate angles
    let startAngle = 0;
    for (let i = 0; i < index; i++) {
      startAngle += (this.sectorData[i].value / this.totalValue) * 360;
    }
    
    const endAngle = startAngle + (this.sectorData[index].value / this.totalValue) * 360;
    
    // Convert to radians
    const startAngleRad = (startAngle - 90) * Math.PI / 180;
    const endAngleRad = (endAngle - 90) * Math.PI / 180;
    
    // Calculate points
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    // Large arc flag
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    // Create path
    const pathData = [
      `M ${centerX} ${centerY}`,           // Move to center
      `L ${x1} ${y1}`,                     // Line to start point
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`, // Arc
      'Z'                                  // Close path
    ].join(' ');
    
    return pathData;
  }

  // Get percentage for display
  getPercentage(value: number): number {
    return Math.round((value / this.totalValue) * 100);
  }

  // Get sector icon paths
  getSectorIcon(iconName: string): string {
    const icons: { [key: string]: string } = {
      'bi-arrow-repeat': 'M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z',
      'bi-building': 'M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z',
      'bi-credit-card': 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 14H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zM1 7v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7H1zm3 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z'
    };
    return icons[iconName] || '';
  }

  // Get detail icon paths based on detail name
  getDetailIcon(detailName: string): string {
    const detailIcons: { [key: string]: string } = {
      // Current expenses (Урсгал зардал)
      'Урсгал шилжүүлэг': 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z', // plus icon
      'Бараа үйлчилгээний бусад': 'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z', // bag icon
      'Цалин хөлс': 'M3.5 0a.5.5 0 0 1 .5.5V1h9V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z', // calendar icon
      'Татаас': 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a.5.5 0 0 1-1 0V4z M0 10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0z', // receipt icon
      'Зээлийн хүүгийн төлбөр': 'M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z', // percent icon
      
      // Capital expenses (Хөрөнгийн зардал)  
      'Барилга байгууламж': 'M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1zm11 0H3v14h10V1z', // building icon
      'Тоног төхөөрөмж': 'M6 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h4c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v7c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V7H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h4V1zm5 5V3H5v3h6zm-1 1H6v6h4V7z', // cpu icon
      'Их засвар': 'M0 2l8-2 8 2v13.5c0 .276-.224.5-.5.5h-15c-.276 0-.5-.224-.5-.5V2zm1 .25v3.17l7 1.75 7-1.75V2.25L8 .75 1 2.25zM15 7.04L8 8.79l-7-1.75v6.96h14V7.04z', // tools icon
      'Стратегийн нөөц хөрөнгө': 'M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z', // trophy icon  
      'Бусад хөрөнгө': 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z', // circle icon
      
      // Loans (Эргэж төлөгдөх цэвэр зээл)
      'Дотоод зээл': 'M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zM7 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zM9 10.5a1.5 1.5 0 1 1 3 0v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-.5z', // bank icon
      'Гадаад зээл': 'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.1.155.699.006.555-.1-.92-.832-1.25-1.206-.49-.186.38-.528.67-.749.503-.298-.224-1.024-.89-1.533-.89-.509 0-.883.323-.883.323z' // globe icon
    };
    return detailIcons[detailName] || 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'; // default circle icon
  }
}
