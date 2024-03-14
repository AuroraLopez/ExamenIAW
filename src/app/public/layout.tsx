import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/IChildren";
import { ILink } from "@/interfaces/ILinks";


export default function PublicLayout({children}: IChildren){

    const enlaces:ILink[] = [
        { name: 'Libros', href: '/public/libros'},
        { name: 'Generos',href: '/public/generos'}
      ]

    return (
        <>
            <header>
                <Menu links = {enlaces}/>
            </header>
            <main>
                { children }
            </main>
        </>
    )
}3