export interface Batiment {
    Index: number;
    Nom: string;
    Zones: Zone[];
}

export interface Zone {
    Index: number;
    Nom: string;
    Nb_logement: number;
    Ratio_habitable: number;
    Groupes: Groupe[];
}

export interface Groupe {
    Index: number;
    Nom: string;
    SURT: number;
}

