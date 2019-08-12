# angular-summary
1. Decorator : untuk menandakan file typescript fungsinya untuk apa di angular. contoh : @Component, @Directive, @Pipe dll
2. Component : Bagian terpenting yang digunakan untuk kerangka angular
3. Pipe : Untuk memodifikasi output data, ditandakan dengan " | " dan parameternya menggunakan titik 2 " : "
4. Directive: Untuk memodifikasi elemen html singkatnya, kita bisa set event apa yang bakal kita listen dan apa hasilnya, seperti yang sudah ada di angular contohnya : ngIf, ngClass, ngStyle dll . Bisa juga kita custom.
5. Local Reference : ditandakan dengan tanda "#" di elemen html fungsinya sama dengan id.
6. Observable : sebuah penamaan untuk menangani method asynchronous. Seperti promise. Method yang dipakai adalah subscribe, subscribe akan menunggu untuk perubahan data dan jangan lupa di unsubscribe.
7. <ng-content> : Untuk mengeluarkan template component lain yang diparsing
8. <ng-template> : Untuk membungkus elemen html seperti div tapi mempunya kelebihan khusus salah satunya berhubungan dengan directive yang ada di angular.
9. QueryParams : parameter pretty untuk api endpoint (url) , contoh : friends/12?user . ?user adalah queryparams
10.Interceptors : Service yang di execute dari setiap request. Berguna untuk mengirim autentikasi di header biasanya
11. Resolver Route : Code yang akan di eksekusi sebelum route berhasil di panggil / load
12. Map : untuk merubah object (rxjs)
13. Tap : Untuk mengambil data / mengeksekusi data tanpa merubah data (rxjs)
14. Subject : Tempat untuk menampung subscription. (rxjs)
15. BehaviourSubject : sama seperti subject , bedanya ini bisa mengambil value sebelum nya tanpa pernah melakukan subscription (rxjs)
16. Take : sebuah fungsi untuk memberitahu bahwa kita akan mengambil 1 value dari subject dan hanya 1 kali (jika param yang diisi 1 , tergantung) tidak perlu di unsubscribe manual
17. Persistant Storage : cache / local storage
18. double tanda seru (!!) : menandakan bahwa jika variable berisi null atau undefined dia akan nge return false, kalo ada akan nge return true
19. Event Emitter : Event dom yang dibuat custom, fungsi utamanya agar bisa di listen di component lain.
20. Skeleton : animasi loading placeholder kalo di mobile namanya shimmer
21. State : Semua data atau informasi yang bisa di manage / control dan harus di tampilkan di depan aplikasi
	- Local state : data yang tidak mempengaruhi data lainya, seperti properti di component
	- Application state: data yang mempengaruhi data lainya
22. Persistent State : Data atau Informasi yang ada di backend, dan akan selalu bertahan jika client side mengalami refresh

23. Alternative Lazy Loading Syntax :
If you're using Angular 8+, you can use an alternative syntax for specifying lazy-loaded routes:

Instead of

const routes: Routes = [{
  path: 'your-path',
  loadChildren: './your-module-path/module-name.module#ModuleName'
}];

you can use

const routes: Routes = [{
  path: 'your-path',
  loadChildren: () => import('./your-module-path/module-name.module').then(m => m.ModuleName)
}];

Please note, that you need to ensure that in your tsconfig.json file, you use

"module": "esnext",
instead of

"module": "es2015",
Why would you use this syntax? In the future, it'll replace the "string-only" approach (i.e. the first alternative mentioned here). It also will give you better IDE support.


24. Angular Universal: sebuah libary tambahan untuk mengubah angular app yang asalanya di render di browser , menjadi di render di server. Ini berguna untuk SEO Search Engine.

How to install it with angular cli:

1. ng add @nguniversal/express-engine --clientProject nama_project
2. npm install --save @nguniversal/module-map-ngfactory-loader
3. import ModuleMapLoaderModule in app.server.module.ts
4. ng build:ssr untuk running application

note: 
- Jika ada fungsi yang harus render / dijalankan di browser, inject PlatformId dan lakukan pemilihan.
- Untuk deploy app tidak bisa di static host lagi, harus server yang support dengan node js server.
