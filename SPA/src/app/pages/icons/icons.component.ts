import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent{
    public nombre:string = "";
    public cantidad:number = 0;
    constructor(){
      
    }

    delete(){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            allowOutsideClick: false,
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

    async add(){
    
        const { value: formValues } = await Swal.fire({
            allowOutsideClick: false,
            title: 'Agregar Nueva Seccional',
            html:  '<input id="swal-input1" class="swal2-input" placeholder="Nombre de la Seccional" type="text">'+
            '<input id="swal-input2" class="swal2-input" placeholder="Cantidad de Personas">',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonColor: '#51cbce',
            confirmButtonText: '<i class="fa fa-floppy-o fa-2x" aria-hidden="true"></i>',
            cancelButtonColor: '#ef8157',
            cancelButtonText: '<i class="fa fa-times fa-2x" aria-hidden="true"></i>',
            preConfirm: () => {
              return [
                (document.getElementById('swal-input1') as HTMLInputElement).value,
                (document.getElementById('swal-input2')as HTMLInputElement).value
              ]
            }
          })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }
    }
}
