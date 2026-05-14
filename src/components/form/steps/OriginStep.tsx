import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import { Stack } from '@mui/material';
function OriginStep() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },]
    return (
        <Stack className='dimensionsRow'>
            <Autocomplete
                disablePortal
                options={top100Films}
                fullWidth
                renderInput={(params) => <TextField {...params} label="Select Country" />}
            />
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
            <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                placeholder="01XXXXXXXXX"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                +20
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField fullWidth id="outlined-basic" label="Location details" variant="outlined" />
        </Stack>
    )
}
export default OriginStep