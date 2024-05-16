import '../css/minorel.css'
import Buttonelement from './element/Buttonelement';
export default function PromoNLI() {
    return (
        <section className='w-100'>
            <div className='promcont'>
                <div className='formpcontain'>
                    <div className='formprom gap-2'>
                        <label htmlFor="nama">Masukkan Nama Anda</label>
                        <input 
                        type="text" 
                        id="nama" 
                        placeholder="Ketik disini..."/>
                    </div>
                    <hr></hr>
                    <Buttonelement id='frmbtn' fw={800} br={"5px"} content={"MULAI BERGABUNG"}/>
                </div>
                <div className='promtext'>
                    <h1>1.250+</h1>
                    <p>Dengan kehadiran 1250<br/> pengguna yang aktif secara<br/> teratur, kami terus berupaya<br/> memberikan layanan terbaik dan<br/> memenuhi kebutuhan serta<br/> harapan mereka.</p>
                </div>
                <hr className='promdivider'></hr>
                <div className='promtext'>
                    <h1>500+</h1>
                    <p>kami telah menjadi mitra percaya<br/> bagi lebih dari 500 lebih perusahaan<br/> yang menggunakan situs web kami<br/> sebagai landasan untuk<br/> mengembangkan bisnis mereka.</p>
                </div>
                <hr className='promdivider'></hr>
                <div className='promtext'>
                    <h1>96%</h1>
                    <p>96% Pengguna merasa puas dan<br/> terbantu dengan adanya website ini.<br/> Dukungan tim kami yang berdedikasi<br/> merupakan salah satu kunci<br/> keberhasilan kami.</p>
                </div>
            </div>
            <div className='puscolsec'>
                <div className='puscolcont'>
                    <div className='puscoltext'>
                        <h1>Pusat <br/><span>Kolaborasi</span></h1>
                        <h4>Selamat datang di Pusat Kolaborasi, tempat di mana<br/> ide-ide bersatu dan kreativitas mengalir tanpa batas.</h4>
                        <p>Di sini, Anda akan bertemu dengan orang-orang kreatif dari<br/> berbagai latar belakang dan industri. Kolaborasi lintas disiplin<br/> ilmu sering kali menghasilkan solusi yang paling inovatif, dan<br/> kami mengundang Anda untuk bergabung dalam jaringan<br/> koneksi yang menginspirasi di Pusat Kolaborasi kami.</p>
                    </div>
                    <img src='/assets/promosplash.png'/>
                </div>
                <hr></hr>
            </div>
        </section>
    );
}