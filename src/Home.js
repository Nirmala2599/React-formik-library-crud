import { Base } from "./Base";
import Carousel from 'react-bootstrap/Carousel';

export function Home(){
    return(
        <Base title={"Dasboard"}>


        <div className="home">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cst.brightspotcdn.com/dims4/default/cfcf630/2147483647/strip/false/crop/4715x3167+0+0/resize/1486x998!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F4P_yDohrSHUZWPtExdpkaEUb7ag%3D%2F0x0%3A4715x3167%2F4715x3167%2Ffilters%3Afocal%282358x1584%3A2359x1585%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24221200%2FAdobeStock_368875323.jpeg.jpg"
         
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5930688715d5dbaa8b348ff3/1d8e6a23-6ac5-4952-8430-f37f02d44c24/Leeds+Library+-+new.jpg?format=1000w"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.houseandgarden.co.uk/photos/620bb44d47f811e6e7d15429/16:9/w_2580,c_limit/Annabelle-Holland.jpg"
          alt="Third slide"
        />
             <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
        <h1 className="vp">Library</h1><br></br>
   <p> 
A library is a collection of materials, books or media that are accessible for use and not just for display purposes. A library provides physical (hard copies) or digital access (soft copies) materials, and may be a physical location or a virtual space, or both. A library's collection can include printed materials and other physical resources in many formats such as DVD, CD and cassette as well as access to information, music or other content held on bibliographic databases.

A library, which may vary widely in size, may be organized for use and maintained by a public body such as a government; an institution such as a school or museum; a corporation; or a private individual. In addition to providing materials, libraries also provide the services of librarians who are trained and experts at finding, selecting, circulating and organizing information and at interpreting information needs, navigating and analyzing very large amounts of information with a variety of resources.

Library buildings often provide quiet areas for studying, as well as common areas for group study and collaboration, and may provide public facilities for access to their electronic resources; for instance: computers and access to the Internet. The library's clientele and services offered vary depending on its type: users of a public library have different needs from those of a special library or academic library, for example. Libraries may also be community hubs, where programs are delivered and people engage in lifelong learning. Modern libraries extend their services beyond the physical walls of a building by providing material accessible by electronic means, including from home via the Internet.

The services that libraries offer are variously described as library services, information services, or the combination "library and information services", although different institutions and sources define such terminology differently.
</p>
<h3 className="vp">History</h3><br></br>

<p>The history of libraries began with the first efforts to organize collections of documents.[2] The first libraries consisted of archives of the earliest form of writing—the clay tablets in cuneiform script discovered in Sumer, some dating back to 2600 BC. Private or personal libraries made up of written books appeared in classical Greece in the 5th century BC. In the 6th century, at the very close of the Classical period, the great libraries of the Mediterranean world remained those of Constantinople and Alexandria.

The Fatimids (r. 909–1171) also possessed many great libraries within their domains. The historian Ibn Abi Tayyi’ describes their palace library, which probably contained the largest collection of literature on earth at the time, as a "wonder of the world". Throughout history, along with bloody massacres, the destruction of libraries has been critical for conquerors who wish to destroy every trace of the vanquished community's recorded memory. A prominent example of this can be found in the Mongol massacre of the Nizaris at Alamut in 1256 and the torching of their library, "the fame of which", boasts the conqueror Juwayni, "had spread throughout the world".[3]

The libraries of Timbuktu were established in the fourteenth century and attracted scholars from all over the world.[4]</p>
<h3 className="vp">Functions</h3><br></br>
<p>
Libraries may provide physical or digital access to material, and may be a physical location or a virtual space, or both. A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, table games, video games and other formats. Libraries range widely in size, up to millions of items.

Libraries often provide quiet areas for studying, and they also often offer common areas to facilitate group study and collaboration. Libraries often provide public facilities for access to their electronic resources and the Internet. Public and institutional collections and services may be intended for use by people who choose not to—or cannot afford to—purchase an extensive collection themselves, who need material no individual can reasonably be expected to have, or who require professional assistance with their research.[5]

Services offered by a library are variously described as library services, information services, or the combination "library and information services", although different institutions and sources define such terminology differently. Organizations or departments are often called by one of these names
</p>
    </div>

        </div>

        </Base>
    )
}