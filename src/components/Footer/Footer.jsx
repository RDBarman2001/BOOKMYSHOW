import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-darkBackground-900 text-white">


            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2  bg-darkBackground-900 text-sm pb-8"
            >
                <span>© 2022 Appy. All rights reserved.</span>
                <span>BookMyShow-Clone</span>

            </div>

        </footer>
    )
}
export default Footer;