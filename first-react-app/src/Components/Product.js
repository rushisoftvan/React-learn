 import {useEffect, useState} from "react";


let Product = () => {
    let [product, setProduct] = useState
    (
        {
            sNo: "A001",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAZwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAABAUGBwgDAgH/xAA+EAABAgQDBQUEBwcFAAAAAAABAgMABAURBhIhMUFRYYEHE3GRoRQiIzIVM0JSgpKxCCRTYqLB8ENEcsLR/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwUE/8QAIxEBAAIBAwMFAQAAAAAAAAAAAAERAgMxQRIhURNhgZGxBP/aAAwDAQACEQMRAD8AvGCCCAIj9dxnQKC73FRqDaX/AOCj31jxA2dbRw7RMSjDGHHppsj2t34UuP5jv6D1tGaVzDzz65h1xSnXFFa1k6lR1MBoiY7TsPIlw5LqmX1q+VAaKB+ZVknoTERrnaHXJ26JAN09o72xnc/MoW8h1irGZlaCSNp0UR7pPjbb1hYxO5SLHLytlH6ZfQRaDnMz1VdcU45VJ9ayb5jNLuOt4daLj7EtFsj2sz7A/wBOdUXD+e+b1hkTNJWAV5SDv+X11T6iOhSyq1zlzaAKFr+B2HpFpFpUPtdpE1karMrMU1w2HeW71q/iBmHVNucT2n1GSqcumYp02xNMK2OMuBY8xGbHZRFjfSGFdXVTJvvabMOy7wP1rLhQs28CNPGJKtdwRnHD/bPiCQWluouMVFkafvCO7X+dP9wYuvB2MaXiyVLkiotzCBd2WcIzo5jiOY9DEEjggggCCCIn2mYkGGsLTD7a7Tb/AMGXsdQojVXQX62gKg7WsRfTuKFy7C80nIXZbIOilfaPnp4ARCbWjoGVez+0LVbMqyRbVXHpHtyWcbb7y6Ft/fQq4idWPl19DUq64v4cQbR0C45wRtxd0OlBuhRSeIMKWZ7ISFEhJ+bJpfxGw9RDfeOM073TJVv2DxgFk1VFoClSx+GtRZW2BYbNFJH2TxA00hjebGc3Rrfab3h4o9PMw/LSltQe8dJ0spVtOgt1JjjV0te2v+zpytBVkjXYNN8ZUyOCx0Btzh4wniOdw5V5aek1kFpdyknRQ3pPI7DDc6iExTYwG16XPMVOmys/KqzMTLSXWzyULiCIP2F1JVQwBLNrcK1yj7jBvu1zgeSxBAWFGcu1rERxDiwycs4DKSJ7ls30Kr+8rz9ADFxdpmIxhrCszMNLyzb47mXttCjtV0Fz42jMLRuVKXtUYLFX3PDyGkt96pC1sNnu20hVgeKr/wCbI8NqlylTbKHu7UQt5RAvlG7TnCVmYeYPwnCkbxtBj4lxQKrk5VkZwNL6xxjTna3o5f2aczGUY157R++OK4gpSJdplK1tlxThNkZrZU7tm+Oj0jlWSlxLaNLd6rXNw0j2VMLmxMl9BQLZGyLEEbBbhePL7KnJtEuSvu0C5UvzUbxjqm96fVlo4dExOMZd4iKr7mYvtO/tRI82tlZQ4LEC+2EF0vTZUsBTMuMygdijuHUkDqYU1ObzZnALXslCRuj1Q5FUy8zLAXzKC3DxO70JP4o+jG6i93j6sYRqTGG3CQUmnzUvSpycujOpoqWtWhudvnfhviMvIHGJnVp1xNGep0qi7xXZwq926b308bCIe4pKDkeSW1cHBbyOyK5kDybboTfKoG17G9uMOLyARoR0hA8m1+cBfn7OagmiViWCrhucCvNNv+sERzsBxPJyFZn6RN3QajZxh0n3cyAolJ4XBJB5cxBAN/bFij6bxOqSZJEpTippI+8u9lHzHUARAu9F4k+LcPzLeIqk26otvtPqTYi4Kb+6o77EWIPPlEYmpCalxncaVk3LR7yT1EB0Q6DHUKvDWFKGoNxyjs0/rYmAX3jv7U/3RbLqig7ReEaHMw0j5MO900TtJ0AiTETu3jnlhfTNW4rIfmbHVDYJI48v0HWLH7N6CmYmm3JwAMKCnXlkjRCRdXPUadYg9EkFTDzLQ1Uoha7f0+hJ/EOEW680mg4AnZzRL0/aRlt3uX989bK/KI0wg1QnlT9Rm51eiph5bluAJJt02Q3TKs4KVBJHAiPRVaEr6yTqIqED0s2fq7tK/l2eUNsyy6g++pKr7xDq8bbCIROjvSoZVHKi4A2lRNgPOMqfuy7D83XsWS7EqlYbZQtb725oZCBfxJAgjS2EcPyeHKFKSMnLNMqS0jv1ISAXXAkAqUd5PGCAh3bPQmX6fK1htvK+w4GnHm1FKwhWw3HBVhr96KlvPNkqUlE0k6Zvq3OpGiuojSGKaf8ASuHahJJF1usK7v8A5gXT6gRnSXfCkJI2KAPhFgNrsvTpxVnU+zvn7KvhK8/lPpCKaoDzarNKCydQlYyLI5X0PSJE4GnkFDqUq3aiE3s6WAUyrym2yfqlDOg/hOnlaAjCmnJZZS8hxsjaFJjjm9pdvlUW0an/AD06xK5oocZKJtuYQgD/AGbgKT+FYJT0MMUhnmppqVk5J1ZUv4cqwkrWtXE8T6DcIgnfZ1h9+pTzKEEBx0qUpf3E21VbfYlItxUIfO1+otfSklQ5OyZenMAFA3KUBYdEhPmYsDs/w65QKUp6eQG5t1IzICr90gbBfjckk+A1teKGqs+5U6lNVB0nPMuqcN91zs/tFCVxYAhKs3N7xOOz6gUapMzU/Xyt1tt3uWJZLhQCQBdSiDc6mwHKGHHlOkaTWe7pJV7I62HUIWvMW7kgi51I0vrx5QEadV6Q/dmlHNaxlSJVSSpsP+1vcm2tl+RVp1iNOKKiEp+ZRsPGLt/Z/oYblqjXlo0eUJSVUf4aPmI8VW/LEFwQQQQBGWqyyqmVyoSKxYy8y42B/KFHL6WMalige3GjLpuKG6shJEvUWxmIGx1AAI6pynoYCKtvi2p2x7zC14Z2pnne2mkKW5i9tYtoVrTMTL8vJSSe8nJp5LLAOwqUbC/hGi8H4WkMK0luTk2wp4i8xMke+8veon9BuiiOz1Qd7R8O5hdIcdNjsv3SrRoyoz0tTJJ6cnXUtMNJzKUf81PKIph7QcQjD9AdU0sCcmbtS44E7VdBr424xnkISUgp0CdCOESrFlcfxHVFzryVIb+Rhm/yI3DxOpP/AJaIlONPyylvNJzoPzI4c4o6t1CakSpMk73aVG6kkXCufjDPPzDsy8p2YdU64rao8OAG4R4cqjIKgtlSVb4QTE+XNGm8vPfCQvkJR6cnW5eUSVTLiwyyji4vQeVyeVo1phykM0GhyNKltW5VlLea3zHeepuYpL9n7DK5+pu4hnEEy8ldqVB2F1Q95XQH15Rf8QEEEEAQzYtw7JYpob9LnwQhz3kOJ+ZpY+VQ8PXUQ8wQGQsUUKqYSqy6bVGrKFy08PkeT95J/tuhA1Mi20DwjXdcoVLr8iqSrEk1NMHYlY1SeKTtB5iKtxB2ESDqVOYeqb8q5tDM18RB5AixHrAVLTKs5TarT6kybrk5lD1uIB1HURPcWYxmsUTCVq+DINnMxLg/1K4q/T1MKxLgbE+Gc66lTnFSydsyx8Rq3G4+X8QEJaXP5mg2oggbeQgH/Pptt1jmwiSdE6uouzpdCP3NDGUICrfbJN7X4A9Ib0vMJdccea74qRlAKyAk8RHITNhYHQCKhVMNodTZ1KVK2ElO2PFPoa6tVJWl0xlKpqZXlT7uiBvUeQF48S3tE7MolJGWXNTTqgltpAuSYv3szwKjCsqucnsrtYmkgPOA3DSdvdp5X1J3nwEFSXDdElcPUSUpUkPhS6MubetW0qPMm5hzggiAggggCCCCAIIIID5aIbibszwzX1KeMn7DOnUTUlZtV+aflV1F+cEEBVGJ+y2q0M957fJTEsQcqxnbUbcUWIG370esM9lNUrdnXKhKMSuhWoZlrHIJsB/VBBAXHg/BFFwmyfo9krmVizk08cziuQ+6OQ63iSwQQBBBBAEEEEB//9k=",
            name: "mi watch",
            price: 1500,
            qty: 2,
            total: ''

        }
    )
    useEffect(() => {
        total();
    }, []);
    const total = (product) => {
        let newProduct = {...product};
        newProduct.total = newProduct.qty * newProduct.price;
        setProduct(newProduct)
    }

    return (
        <>
            {total()}
            <p className="h3 text-success text-center">productItem</p>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover text-center table-bordered">
                            <thead>
                            <tr>
                                <th>SR no</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{product.sNo}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt="" width="50px" hight="50px"></img></td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                                <td>{product.total}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;

