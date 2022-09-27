import cl from './appFooter.module.scss';

const AppFooter = () => {
    return (
        <div className={cl.downfooter}>
            <div className={cl.containerfooter}>
                <div><a href="https://github.com/darnnng" class="footerlink"> darnnng</a></div>
                
                <div>2022</div>
                <div>

                    <a target="_blank" href="https://ru-ru.facebook.com/" class="sociallinks">
                    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.04 27.333L5 15.666H0V10.666H5V7.33302C5 2.84002 7.787 0.666016 11.8 0.666016C13.72 0.666016 15.373 0.799016 15.853 0.866016V5.57302H13.066C10.893 5.57302 10.466 6.61302 10.466 8.13302V10.666H16.666L14.999 15.666H10.466V27.333H5.039H5.04Z" fill="white"/>
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default AppFooter;