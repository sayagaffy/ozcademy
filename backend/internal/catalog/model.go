package catalog

type Module struct {
	ID           string  `json:"id"`
	Title        string  `json:"title"`
	MentorName   string  `json:"mentorName"`
	Rating       float64 `json:"rating"`
	LessonsCount int     `json:"lessonsCount"`
	ImageURL     string  `json:"imageUrl"`
	Category     string  `json:"category"`
	Price        *string `json:"price,omitempty"`
}

type Mentor struct {
	ID         string  `json:"id"`
	Name       string  `json:"name"`
	Role       string  `json:"role"`
	Rating     float64 `json:"rating"`
	ImageURL   string  `json:"imageUrl"`
	Status     string  `json:"status"`
	PriceStart *string `json:"priceStart,omitempty"`
}
