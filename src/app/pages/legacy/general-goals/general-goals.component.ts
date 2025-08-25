import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-goals',
  templateUrl: './general-goals.component.html',
  styleUrls: ['./general-goals.component.scss']
})
export class GeneralGoalsComponent implements OnInit {
  currentSlide = 0;
  slidesVisible = false;

  slides = [
    {
      title: '2025 оны төсвийн үндсэн зорилго',
      subtitle: 'Эдийн засгийн тогтвортой хөгжлийн чиглэл',
      content: [
        'Эдийн засгийн өсөлт дэмжих',
        'Инфляцийг тогтворжуулах',
        'Нийгмийн халамжийг сайжруулах',
        'Ажлын байр бүрдүүлэх'
      ],
      icon: 'bi-bullseye'
    },
    {
      title: 'Эдийн засгийн өсөлтийн зорилтууд',
      subtitle: 'ДНБ-ний өсөлт болон үр ашигтай хөрөнгө оруулалт',
      content: [
        'ДНБ-ны 5.2%-ийн өсөлт',
        'Үйлдвэрлэлийн салбарын хөгжүүлэлт',
        'Экспортын бүтээгдэхүүний төрөлжүүлэлт',
        'Дижитал эдийн засгийн хөгжүүлэлт'
      ],
      icon: 'bi-graph-up-arrow'
    },
    {
      title: 'Инфляцийн тогтворжуулалт',
      subtitle: 'Үнийн тогтвортой байдлын хангалт',
      content: [
        'Инфляцийг 6-8%-д байлгах',
        'Үндсэн хүнсний бүтээгдэхүүний үнэ тогтворжуулалт',
        'Мөнгөний бодлогын уялдаа холбоо',
        'Гадаад валютын ханшийн тогтвортой байдал'
      ],
      icon: 'bi-graph-down'
    },
    {
      title: 'Нийгмийн халамжийн сайжруулалт',
      subtitle: 'Иргэдийн амьжиргааны түвшин дээшлүүлэх',
      content: [
        'Цалин, тэтгэврийн 15%-ийн өсөлт',
        'Эрүүл мэндийн үйлчилгээний сайжруулалт',
        'Боловсролын чанарын дээшлүүлэлт',
        'Нийгмийн хамгааллын өргөжүүлэлт'
      ],
      icon: 'bi-heart'
    },
    {
      title: 'Ажлын байрны бүрдүүлэлт',
      subtitle: 'Ажилгүйдлийн түвшин бууруулах',
      content: [
        '50,000 шинэ ажлын байр бүрдүүлэх',
        'Залуучуудын хөдөлмөр эрхлэлтийг дэмжих',
        'Мэргэжлийн сургалтыг өргөжүүлэх',
        'Жижиг, дунд бизнесийг дэмжих'
      ],
      icon: 'bi-people'
    },
    {
      title: 'Хэрэгжүүлэх арга зам',
      subtitle: 'Зорилтуудад хүрэх үндсэn стратеги',
      content: [
        'Төсвийн зөв төлөвлөлт, зарцуулалт',
        'Салбар хоорондын уялдаа холбоо',
        'Олон улсын хамтын ажиллагаа',
        'Тогтмол хяналт, үнэлгээ'
      ],
      icon: 'bi-gear'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.slidesVisible = true;
    }, 300);
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
