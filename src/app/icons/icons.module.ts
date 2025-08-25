import { NgModule } from '@angular/core';

import { 
  IconArrowUp,
  IconArrowDown, 
  IconCamera, 
  IconHeart, 
  IconGithub, 
  IconBook, 
  IconX, 
  IconMonitor, 
  IconMapPin, 
  IconPhone, 
  IconMap, 
  IconChevronRight, 
  IconChevronDown, 
  IconCalendar, 
  IconFacebook, 
  IconYoutube, 
  IconTwitter, 
  IconInstagram, 
  IconMenu, 
  IconArrowRight, 
  IconArrowLeft 
} from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub,
  IconBook,
  IconX,
  IconMonitor,
  IconMapPin,
  IconPhone,
  IconChevronRight,
  IconCalendar,
  IconMap,
  IconFacebook,
  IconYoutube,
  IconTwitter,
  IconInstagram,
  IconChevronDown,
  IconArrowUp,
  IconArrowDown,
  IconMenu,
  IconArrowLeft,
  IconArrowRight
];


@NgModule({
  exports: icons
})
export class IconsModule { }
