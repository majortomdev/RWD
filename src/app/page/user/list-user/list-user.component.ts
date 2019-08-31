import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: []
})
export class ListUserComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['userId','firstName','lastName','userName','dateOfBirth','edit','delete'];

  @ViewChild('listUsersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  errorMsg: any;

  length: 10;
  pageSize = 5;
  pageSizeOptions: number[] = [3, 5, 8];

  setPageSizeOptions(setPageSizeOptions: string){
    this.pageSizeOptions = setPageSizeOptions.split(',').map(str => +str);
  }

  constructor(
    private router: Router,
    private usrSvc: UserService
  ) {
    this.populateUserTable();
   }

  private populateUserTable() {
    const users: User[] = [];
    this.dataSource = new MatTableDataSource(users);

    this.usrSvc.getUsers()
    .subscribe(
      (uss: User[]) => {
        this.dataSource.data = uss;
        if (uss) {
          this.errorMsg = null;
        } else {
          this.errorMsg = 'Unable to get ' + uss + ' list. Going to login page';
          this.router.navigate(['sign=in']);
        }
      }
    );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  editUser(user: User): void {
    this.router.navigate(['/edit-user' + user.id]);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: User ): void {
    if(confirm('Are you sure about this delete thing, boss? ')) {
      this.errorMsg = null;
      this.usrSvc.deleteUser(user.id)
      .subscribe(
            (data: boolean) => {
              if(data) {
                this.errorMsg = null;
                this.populateUserTable();
              } else {
                this.errorMsg = 'Unable to delete user ' + user.username + '! Please contact admin';
              }
              this.router.navigate(['list-user']);
            }
      )
    }
  }

}
