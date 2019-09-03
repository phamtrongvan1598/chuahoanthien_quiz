import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireStorage, AngularFireStorageReference} from 'angularfire2/storage';
import {NoteService} from '../../service/note.service';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  files: File[];
  ref: AngularFireStorageReference;
  percent = 0;
  index = 0;
  btn = 'Upload';
  totalFiles = 0;

  constructor(private httpClient: HttpClient, private afStorage: AngularFireStorage, private noteService: NoteService) {
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.files = event.target.files;
    this.totalFiles = this.files.length;
    this.percent = 0;
    this.index = 0;
  }

  async onUpload() {
    try {
      this.noteService.imageUrls = [];
      this.index = 1;
      this.btn = 'Uploading';
      for (const file of this.files) {
        const id = Math.random().toString(36).substring(2); // Create a random string
        this.ref = this.afStorage.ref(id);
        // await
        const snapshot: UploadTaskSnapshot = await this.ref.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        this.noteService.imageUrls.push(downloadUrl);
        this.percent = Math.round(this.index / this.totalFiles * 100);
        // prevent index++ when index=totalFile
        this.index = this.index === this.totalFiles ? this.index : this.index + 1;
      }
    } catch (error) {
      console.log(`Failed to upload file and get link - ${error}`);
    }
    console.log(this.noteService.imageUrls);
    this.btn = 'Upload';
  }

  // upload() {
  //   const id = Math.random().toString(36).substring(2); // Create a random string
  //   this.ref = this.afStorage.ref(id);
  //   this.ref.put(this.selectedFile)
  //     .then(snapshot => {
  //       return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
  //     })
  //     .then(downloadURL => {
  //       this.downloadURL = downloadURL;
  //       this.giveURLtoCreate.emit(this.downloadURL);
  //       return downloadURL;
  //     })
  //     .catch(error => {
  //       // Use to signal error if something goes wrong.
  //       console.log(`Failed to upload file and get link - ${error}`);
  //     });
  // }

}
