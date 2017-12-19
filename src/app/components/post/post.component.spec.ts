<<<<<<< HEAD
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MessageService } from '../../services/message.service';
// import { PostComponent } from './post.component';
//
// describe('PostComponent', () => {
//   let component: PostComponent;
//   let fixture: ComponentFixture<PostComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PostComponent ],
//       providers: [MessageService]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(PostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../../services/message.service';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ]
      // providers: [MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 9929c787742ba820c2622d0cf362bd4082e269b2
