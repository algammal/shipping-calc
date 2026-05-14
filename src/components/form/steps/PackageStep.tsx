import { TextField, InputAdornment } from '@mui/material';
import { Stack } from '@mui/material';
function PackageStep() {

    return (
        <Stack className='dimensionsRow'>
            <TextField
                label="Weight"
                name="weight"
                type="number"
                sx={{width:'200px'}}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">kg</InputAdornment>
                        ),
                        inputProps: {
                            min: 0,
                            step: 0.1,
                        },
                    },
                }}
            />
            <TextField
                name="volume"
                label="Volume"
                type="number"
                sx={{width:'200px'}}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">cm³</InputAdornment>
                        ),
                        inputProps: {
                            min: 0,
                            step: 1,
                        },
                    },
                }}
            />
        </Stack>
    )
}
export default PackageStep