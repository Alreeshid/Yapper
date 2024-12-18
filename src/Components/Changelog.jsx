
export default function Changelog(data) {
    return (
        <>
            <h1>Changelog:<br></br></h1>
            <div className="max-w-xl p-8 mx-auto dark:bg-gray-100 dark:text-gray-800">
                <ul className="space-y-12">
                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v3.2.0</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"></span>
                                    <span className="group-hover:underline dark:text-gray-800">Feature</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}