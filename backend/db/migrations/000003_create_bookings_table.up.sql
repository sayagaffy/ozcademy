CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL,
    mentor_id VARCHAR(50) NOT NULL,
    session_type VARCHAR(100) NOT NULL,
    schedule_date DATE NOT NULL,
    schedule_time TIME NOT NULL,
    goals_description TEXT NOT NULL,
    portfolio_link VARCHAR(255),
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    price BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
