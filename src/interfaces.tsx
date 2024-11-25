// Post interface
export interface Post {
    id:                  string;
    guid:                string;
    title:               string;
    text:                string;
    type:                string;
    channel:             Channel;
    tags:                any[];
    attachmentOrder:     string[];
    releaseDate:         Date;
    likes:               number;
    dislikes:            number;
    score:               number;
    comments:            number;
    creator:             Creator;
    wasReleasedSilently: boolean;
    metadata:            Metadata;
    galleryAttachments:  any[];
    thumbnail:           Thumbnail;
    videoAttachments:    string[];
    audioAttachments:    any[];
    pictureAttachments:  any[];
}

export interface Channel {
    id:      string;
    creator: string;
    title:   string;
    urlname: string;
    about:   string;
    order:   number;
    cover:   Thumbnail;
    card:    null;
    icon:    Thumbnail;
}

export interface Thumbnail {
    width:        number;
    height:       number;
    path:         string;
    childImages?: Thumbnail[];
}

export interface Creator {
    id:                     string;
    owner:                  Owner;
    title:                  string;
    urlname:                string;
    description:            string;
    about:                  string;
    category:               Category;
    cover:                  Thumbnail;
    icon:                   Thumbnail;
    liveStream:             LiveStream | null;
    subscriptionPlans:      SubscriptionPlan[];
    discoverable:           boolean;
    subscriberCountDisplay: string;
    incomeDisplay:          boolean;
    defaultChannel:         string;
    socialLinks:            SocialLinks;
    channels:               Channel[];
    card:                   Thumbnail;
}

export interface Category {
    id:    string;
    title: string;
}

export interface LiveStream {
    id:          string;
    title:       string;
    description: string;
    thumbnail:   Thumbnail;
    owner:       string;
    channel:     string;
    streamPath:  string;
    offline:     Offline;
}

export interface Offline {
    title:       string;
    description: string;
    thumbnail:   Thumbnail;
}

export interface Owner {
    id:       string;
    username: string;
}

export interface SocialLinks {
    instagram?: string;
    website?:   string;
    facebook?:  string;
    youtube?:   string;
    twitter?:   string;
}

export interface SubscriptionPlan {
    id:                       string;
    title:                    string;
    description:              string;
    price:                    string;
    priceYearly:              string;
    currency:                 string;
    logo:                     null;
    interval:                 string;
    featured:                 boolean;
    allowGrandfatheredAccess: boolean;
    discordServers:           any[];
    discordRoles:             any[];
}

export interface Metadata {
    hasVideo:        boolean;
    videoCount:      number;
    videoDuration:   number;
    hasAudio:        boolean;
    audioCount:      number;
    audioDuration:   number;
    hasPicture:      boolean;
    pictureCount:    number;
    isFeatured:      boolean;
    displayDuration: number;
    hasGallery:      boolean;
    galleryCount:    number;
}