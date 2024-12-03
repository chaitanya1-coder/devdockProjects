// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract Trading is ReentrancyGuard {
    struct Listing {
        address seller;
        uint256 price;
        string itemDetails;
        bool isNFT;
        address tokenContract;
        uint256 tokenId;
        bool active;
    }

    mapping(uint256 => Listing) public listings;
    uint256 public listingCounter;
    
    event ListingCreated(uint256 indexed listingId, address indexed seller, uint256 price);
    event ListingPurchased(uint256 indexed listingId, address indexed buyer, address indexed seller);
    
    function createListing(
        uint256 _price,
        string memory _itemDetails,
        bool _isNFT,
        address _tokenContract,
        uint256 _tokenId
    ) external returns (uint256) {
        listingCounter++;
        
        listings[listingCounter] = Listing({
            seller: msg.sender,
            price: _price,
            itemDetails: _itemDetails,
            isNFT: _isNFT,
            tokenContract: _tokenContract,
            tokenId: _tokenId,
            active: true
        });
        
        emit ListingCreated(listingCounter, msg.sender, _price);
        return listingCounter;
    }
    
    function purchaseListing(uint256 _listingId, address _stablecoin) external nonReentrant {
        Listing storage listing = listings[_listingId];
        require(listing.active, 'Listing not active');
        require(msg.sender != listing.seller, 'Seller cannot buy');
        
        IERC20(_stablecoin).transferFrom(msg.sender, listing.seller, listing.price);
        
        listing.active = false;
        
        emit ListingPurchased(_listingId, msg.sender, listing.seller);
    }
}