import { Component, OnInit, ViewChild } from '@angular/core';
import { Constants } from 'src/app/services/constants';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  constructor() { }
  @ViewChild('inline') inline;
  active: any;
  sub_active: any;
  sub_index = -1;
  colors = Constants.colors;
  top_text = "";
  top_step = Array(75).fill(0).map((x, i) => i);
  data = [
    {
      index: "01", title: "Дунд хугацааны төсвийн хүрээний мэдэгдэл", 
      bottom: "Дунд хугацааны төсвийн хүрээний мэдэгдэл гэдэг нь ирэх 3 жилийн нийгэм, эдийн засгийн таамаглалд үндэслэн төсвийн      боловсруулахад      баримтлах      үзүүлэлтүүдийн дээд      доод хязгаарыг      тогтоож буй эрхзүйн      баримт бичиг юм.",
      sub: [{ date: "4 сарын 15", sub_title: "Засгийн газарт хүргүүлэх" ,
    top: "1-5 саруудад орон нутгийн    хөгжлийн сангийн хөрөнгөөр    хэрэгжүүлэх төсөл, хөтөлбөрт    саналаа өгөх боломжтой."},
      { date: "5 сарын 1", sub_title: "УИХ-д хүргүүлэх" , 
      top: "www.parliament.mn www.iltod.mof.gov.mn сайтуудаас мэдээлэл авч болно."},
      { date: "6 сарын 1", sub_title: "Хуульчлан батлах",
    top: "    Батлагдсан дунд    хугацааны төсвийн    мэдэгдлийг ажлын    7 хоногийн дотор    хэвлэн нийтэлсэнтэй    танилцах боломжтой." }]
    },
    {
      index: "02", title: "Жилийн төсвийн хязгаар",
      top: "",
      bottom: "Жилийн төсвийн хязгаар гэдэг      нь тухайн төсвийн жилийн      орлогын доод, зарлагын дээд      хэмжээ юм.",
      sub: [{ date: "6 сарын 10", sub_title: "Саналыг хүргүүлэх" },
      { date: "6 сарын 20", sub_title: "Саналыг нэгтгэх" , top: ""},
      { date: "7 сарын 1", sub_title: "Хэлэлцэн батлах", top: "" },
      { date: "7 сарын 5", sub_title: "Батлагдсан хязгаарыг төсвийн удирдамжийн хамт ТЕЗ нарт хүргүүлэх", top: "" }]
    },
    {
      index: "03", title: "Төсвийн төсөл",
      top: "",
      bottom: "Тухайн шатны      байгууллагын      боловсруулсан      төсвийн саналыг      төсвийн төсөл гэнэ.",
      sub: [{ date: "7 сарын 5", sub_title: "Төсвийн төслийг хүргүүлэх" },
      { date: "8 сарын 15", sub_title: "Саналыг нэгтгэн хүргүүлэх", top: ""},
      { date: "9 сарын 15", sub_title: "Засгийн газарт ирсэн саналуудаг нэгтгэн хүргэх" , top: ""},
      { date: "10 сарын 1", sub_title: "УИХ-д өргөн барих", top: "" }]
    },
    {
      index: "04", title: "Төсвийг хэлэлцэн батлах",
      top: "",
      bottom: "",
      sub: [{ date: "11 сарын 15", sub_title: "Төсвийг хэлэлцэн батлах", 
      top: "Ажлын 3 хоногийн      дотор www.parliament.mn      www.iltod.mof.gov.mn      сайтууд дээр мэдээллийг      байршуулдаг." }]
    },
    {
      index: "05", title: "Орон нутгийн төсөв",
      top: "",
      bottom: "Орон нутгийн      төсөв: ИТХ-р      баталсан      аймаг, нийслэл,      сум дүүргийн      Засаг даргын      бүрдүүлэн      зарцуулах      төсөв юм",
      sub: [{ date: "11 сарын 25", sub_title: "Төсвийн төслийг тухайн шатны ИТХ-д өргөн мэдүүлэх" },
      { date: "12 сарын 5", sub_title: "Аймаг нийслэлийн төсвийг хэлэлцэн батлах" , top: ""},
      { date: "12 сарын 10", sub_title: "Төсвийн төслийг тухайн шатны ИТХ-д өргөн мэдүүлэх", top: "" },
      { date: "12 сарын 20", sub_title: "Сум, дүүргийн төсвийг хэлэлцэн батлах", top: "" }]
    }
  ];

  top_desc = "Ажлын 3 хоногийн дотор www.parliament.mn www.iltod.mof.gov.mn сайтууд дээр мэдээллийг байршуулдаг.";
  bottom_desc = "Жилийн төсвийн хязгаар гэдэг нь тухайн төсвийн жилийн орлогын доод, зарлагын дээд хэмжээ юм.";
  ngOnInit(): void {

  }

  remain = 0
  show(id) {
    this.sub_index = -1;
    this.sub_active = -1;
    this.active = id;
    this.remain = 75 - ((3.4 * 4) + (this.data[id].sub.length * 6))
    this.remain = Math.round(this.remain / (this.data[id].sub.length + 4))
    this.remain = this.remain > 10 ? 10 : this.remain


  }

  showSub(event, id) {
    var out = this.inline.nativeElement.getBoundingClientRect().x;
    var element = event["currentTarget"].getBoundingClientRect().x + (event["currentTarget"].getBoundingClientRect().width / 2) - 10;
    var distance = element - out;
    var index = Math.round((distance / 15.09));
    this.sub_index = index;
    this.sub_active = id;
    this.top_text = this.data[this.active].sub[this.sub_active].date;
  }

  getDots(index, pos) {
    var sum = 0
    var check = 0;
    if (this.active != null) {
      check = this.remain;
    }
    if (index === 0 && pos === "first") {
      return Array(check ? check : 9).fill(0).map((x, i) => i);
    }
    if (index === this.data.length - 1 && pos === "last") {
      return Array(check ? check : 9).fill(0).map((x, i) => i);
    }
    if (index >= 0 && index < this.data.length - 1 && pos === "last") {
      return Array(check ? check : 11).fill(0).map((x, i) => i);
    }
    return Array(0).fill(0).map((x, i) => i);
  }

  getSubDots(index, sub_index, pos) {
    if (sub_index === 0 && pos === "first" && index == 0) {
      return Array(this.remain).fill(0).map((x, i) => i);
    }
    if (sub_index === this.data[index].sub.length - 1 && pos === "last") {
      return Array(this.remain).fill(0).map((x, i) => i);
    }
    if (sub_index >= 0 && sub_index < this.data[index].sub.length - 1 && pos === "last") {
      return Array(this.remain).fill(0).map((x, i) => i);
    }
    return Array(0).fill(0).map((x, i) => i);
  }

}
